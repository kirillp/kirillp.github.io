package org.sudu.experiments.demo.ui.window;

import org.sudu.experiments.Canvas;
import org.sudu.experiments.Disposable;
import org.sudu.experiments.GL;
import org.sudu.experiments.WglGraphics;
import org.sudu.experiments.demo.ui.colors.DialogItemColors;
import org.sudu.experiments.demo.ui.UiContext;
import org.sudu.experiments.demo.ui.UiFont;
import org.sudu.experiments.fonts.FontDesk;
import org.sudu.experiments.math.V2i;
import org.sudu.experiments.math.V4f;

import java.util.Objects;

public class TextLineView extends View {

  public final UiContext context;
  private String title;
  private UiFont uiFont;
  private FontDesk font;
  private float margin;
  private boolean renderRequest;

  private GL.Texture texture;
  private final V4f texRect = new V4f();

  public TextLineView(UiContext context) {
    this.context = context;
  }

  public void setText(String title, UiFont uiFont, float margin) {
    boolean fontChange = !Objects.equals(this.uiFont, uiFont);
    boolean titleChange = !Objects.equals(this.title, title);
    boolean marginChange = margin != this.margin;
    if (fontChange) {
      this.uiFont = uiFont;
      font = null;
      setHeight(0);
    }
    renderRequest = fontChange || titleChange || marginChange;
    this.title = title;
    this.margin = margin;
  }

  public int computeAndSetHeight() {
    requireFont();
    int margin = context.toPx(this.margin);
    setHeight(font.lineHeight() + margin * 2);

    return size.y;
  }

  public void setWidth(int width) {
    size.x = width;
  }

  public void draw(WglGraphics g, DialogItemColors theme) {
    if (sizeEmpty()) return;
    if (!isEmpty()) {
      if (renderRequest || texture == null) {
        renderTexture(g);
      }
    }
    V4f bgColor = theme.toolbarItemColors.bgColor;
    if (texture != null) {
      int width = texture.width();
      V4f textC = theme.toolbarItemColors.color;
      g.drawText(pos.x, pos.y, texture.size(), texRect, texture,
          textC, bgColor, 0);
      if (width < size.x) {
        drawBg(g, width, size.x - width, bgColor);
      }
    } else {
      drawBg(g, 0, size.x, bgColor);
    }
  }

  public boolean sizeEmpty() {
    return size.x == 0 || size.y == 0;
  }

  public boolean isEmpty() {
    return uiFont == null || title == null || title.isEmpty();
  }

  private void setHeight(int height) {
    size.y = height;
  }

  private void drawBg(WglGraphics g, int x0, int sizeX, V4f bgColor) {
    V2i rSize = context.v2i1;
    rSize.set(sizeX, size.y);
    g.drawRect(pos.x + x0, pos.y, rSize, bgColor);
  }

  private void requireFont() {
    if (font == null) {
      font = context.fontDesk(uiFont);
    }
  }

  private void renderTexture(WglGraphics g) {
    renderRequest = false;
    requireFont();
    float lineHeightF = font.lineHeightF();
    float leftRightFontPadding = (lineHeightF + 5f) / 10;
    int margin = context.toPx(this.margin);
    int measured = g.mCanvas.measurePx(font, title, leftRightFontPadding * 2);
    int width = Math.min(measured + margin, size.x);
    if (width == 0) return;
    Canvas canvas = g.createCanvas(width, size.y);
    canvas.setFont(font);
    canvas.drawText(title,
        margin + leftRightFontPadding,
        margin + font.uiBaseline());
    var t = texture != null ? texture : (texture = g.createTexture());
    t.setContent(canvas);
    canvas.dispose();
    texRect.set(0, 0, texture.width(), texture.height());
  }

  public void onDprChange() {
    if (uiFont != null) {
      font = null;
      renderRequest = true;
    }
  }

  @Override
  public void dispose() {
    texture = Disposable.assign(texture, null);
  }
}
