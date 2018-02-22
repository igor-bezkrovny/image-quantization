/**
 * @preserve
 * Copyright 2015-2018 Igor Bezkrovnyi
 * All rights reserved. (MIT Licensed)
 *
 * iq.ts - Image Quantization Library
 */

import { AbstractImageQuantizer } from './imageQuantizer';
import { ImageQuantizerYieldValue } from './imageQuantizerYieldValue';
import { NearestColor } from './nearestColor';
import { ErrorDiffusionArray, ErrorDiffusionArrayKernel } from './array';
import { ErrorDiffusionRiemersma } from './riemersma';

export {
  AbstractImageQuantizer,
  ImageQuantizerYieldValue,
  NearestColor,
  ErrorDiffusionArray,
  ErrorDiffusionArrayKernel,
  ErrorDiffusionRiemersma,
};
