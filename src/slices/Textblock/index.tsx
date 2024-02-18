import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Textblock`.
 */
export type TextblockProps = SliceComponentProps<Content.TextblockSlice>;

/**
 * Component for "Textblock" Slices.
 */
const Textblock = ({ slice }: TextblockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for textblock (variation: {slice.variation}) Slices
    </section>
  );
};

export default Textblock;
