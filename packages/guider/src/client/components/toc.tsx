import { useContext } from 'react';
import type { MdxHeadings } from '../page/context';
import { GuiderLayoutContext } from '../page/context';

export function TocLink(props: { heading: MdxHeadings }) {
  return <a href={'#'}>{props.heading.value}</a>;
}

export function GuiderToc() {
  const ctx = useContext(GuiderLayoutContext);

  return (
    <div className="gd-flex gd-flex-col">
      <div className="gd-space-y-1">
        {(ctx?.headings ?? []).map((heading, i) => (
          <TocLink key={i} heading={heading} />
        ))}
      </div>
    </div>
  );
}
