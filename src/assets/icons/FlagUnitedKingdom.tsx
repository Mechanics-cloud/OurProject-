import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgFlagUnitedKingdom = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    height={'1em'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'1em'}
    xmlns={'http://www.w3.org/2000/svg'}
    xmlnsXlink={'http://www.w3.org/1999/xlink'}
    {...props}
  >
    <path
      d={'M0 0h24v24H0z'}
      fill={'url(#flag-united-kingdom_svg__a)'}
    />
    <defs>
      <pattern
        height={1}
        id={'flag-united-kingdom_svg__a'}
        patternContentUnits={'objectBoundingBox'}
        width={1}
      >
        <use
          transform={'scale(.01389)'}
          xlinkHref={'#flag-united-kingdom_svg__b'}
        />
      </pattern>
      <image
        height={72}
        id={'flag-united-kingdom_svg__b'}
        width={72}
        xlinkHref={
          'data:image/png;base64,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'
        }
      />
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgFlagUnitedKingdom)
const Memo = memo(ForwardRef)

export default Memo
