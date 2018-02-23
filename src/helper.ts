/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * constants.ts - part of Image Quantization Library
 */
// TODO: do we need this helper?

import { AbstractPaletteQuantizer } from "./palette/paletteQuantizer"
import { AbstractDistanceCalculator } from "./distance/distanceCalculator"
import { AbstractImageQuantizer } from "./image/imageQuantizer"
import { PointContainer } from "./utils/pointContainer"
import { Palette } from "./utils/palette"
import { ssim } from "./quality/ssim"

export class IQ {
  private paletteQuantizer: AbstractPaletteQuantizer;
  private distanceCalculator: AbstractDistanceCalculator;
  private ditherer: AbstractImageQuantizer;

  constructor(colors: number, DistanceCalculator: new() => AbstractDistanceCalculator, Quantizer: new(distanceCalculator: AbstractDistanceCalculator, color: number) => AbstractPaletteQuantizer, ditherer: AbstractImageQuantizer) {
    this.ditherer = ditherer;
    this.distanceCalculator = new DistanceCalculator();
    this.paletteQuantizer = new Quantizer(this.distanceCalculator, colors);
  }

  sample(image: PointContainer): void {
    this.paletteQuantizer.sample(image);
  }

  buildPalette(): Palette {
    return this.paletteQuantizer.quantize();
  }

  buildImage(image: PointContainer, palette: Palette): PointContainer {
    return this.ditherer.quantize(image, palette);
  }

  compare(image1: PointContainer, image2: PointContainer) {
    return ssim(image1, image2)
  }
}
