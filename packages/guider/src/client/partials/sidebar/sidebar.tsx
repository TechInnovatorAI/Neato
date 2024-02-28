import { useContext } from 'react';
import { useGuider } from '../../hooks/use-guider';
import { GuiderLayoutContext } from '../../page/context';
import { SidebarLink } from './link';
import { SidebarCustomComponent } from './component';
import { SidebarSeperator } from './seperator';
import { SidebarGroup } from './group';
import { SidebarNested } from './nested';
import { SidebarStarLink } from './star-link';

export function SidebarInternal() {
  const ctx = useContext(GuiderLayoutContext);
  const { directory } = useGuider(ctx?.meta);

  return (
    <div className="gd-flex gd-flex-col">
      <div className="gd-space-y-1 neato-guider-sidebar -gd-mx-4">
        {directory.sidebarItems.map((link, i) => {
          const key = `--${i}`;
          if (link.type === 'link' && link.style === 'star')
            return <SidebarStarLink key={key} link={link} />;
          if (link.type === 'link')
            return <SidebarLink key={key} link={link} />;
          if (link.type === 'nested-link')
            return <SidebarNested key={key} link={link} />;
          if (link.type === 'component')
            return <SidebarCustomComponent key={key} component={link} />;
          if (link.type === 'seperator') return <SidebarSeperator key={key} />;
          if (link.type === 'group')
            return <SidebarGroup key={key} group={link} />;
          return null;
        })}
      </div>
    </div>
  );
}
