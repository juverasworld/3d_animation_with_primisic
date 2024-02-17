import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContentIndexs`.
 */
export type ContentIndexsProps =
  SliceComponentProps<Content.ContentIndexsSlice>;

/**
 * Component for "ContentIndexs" Slices.
 */
const ContentIndexs = ({ slice }: ContentIndexsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for content_indexs (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ContentIndexs;
