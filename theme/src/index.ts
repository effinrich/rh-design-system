import merge from 'deepmerge'

import mdx from './mdx'

import borders from '~/border/src'
import colors from '~/colors/src'
import radii from '~/radii/src'
import shadows from '~/shadows/src'
import sizes from '~/sizes/src'
import space from '~/space/src'
import typography from '~/typography/src'
import zIndices from '~/z-index/src'

export const theme = merge.all(
  [
    { space },
    { sizes },
    typography,
    { colors },
    { shadows },
    { radii },
    { borders },
    { zIndices },
    { mdx }
  ],
  { arrayMerge: (t, s) => [...s, ...t] }
)
