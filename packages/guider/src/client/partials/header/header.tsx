import { useContext } from 'react';
import { GuiderLayoutContext } from '../../page/context';
import { useGuider } from '../../hooks/use-guider';
import { GithubDisplay } from '../../components/github';
import { HeaderTabs } from './tabs';
import { HeaderNav } from './nav';
import { Logo } from './logo';

export function HeaderInternal() {
  const ctx = useContext(GuiderLayoutContext);
  const { site } = useGuider(ctx?.meta);

  return (
    <header className="gd-p-6 gd-pb-0 -gd-mx-6 gd-box-content gd-border-b gd-border-bgLight gd-mb-8 gd-sticky gd-z-50 gd-top-0 gd-bg-bg">
      <div className="gd-flex gd-justify-between gd-mb-6">
        <Logo />
        <div className="gd-flex gd-items-center gd-space-x-6">
          <HeaderNav items={site.navigation} />
          {site.github ? (
            <GithubDisplay
              org={site.github.split('/')[0]}
              repo={site.github.split('/', 2)[1]}
            />
          ) : null}
        </div>
      </div>
      <div className="gd-hidden md:gd-block">
        {site.tabs.length > 0 ? <HeaderTabs tabs={site.tabs} /> : null}
      </div>
      <div className="gd-block md:gd-hidden gd-border-t gd-border-bgLight gd-px-6 -gd-mx-6">
        <p>Mobile nav will go here</p>
      </div>
    </header>
  );
}
