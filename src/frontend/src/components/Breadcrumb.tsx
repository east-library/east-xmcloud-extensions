import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

type BreadcrumbData = {
  id: string;
  name: string;
  displayName: string;
  title: { value: string };
  navigationTitle: { value: string };
  url: { path: string };
};

interface Fields {
  data: {
    contextItem: BreadcrumbData & {
      ancestors: BreadcrumbData[];
    };
  };
}

type BreadcrumbProps = {
  params: { [key: string]: string };
  fields: Fields;
};

type ComponentContentProps = {
  id: string;
  pageState: string | undefined;
  url: string;
  children: JSX.Element;
};

const BreadcrumbDefaultComponent = (props: BreadcrumbProps): JSX.Element => (
  <div className={`component breadcrumb ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Breadcrumb</span>
    </div>
  </div>
);

const BreadcrumbItem = (props: ComponentContentProps): JSX.Element => {
  return (
    <li key={props.id} className="item">
      {props.pageState !== 'edit' ? (
        <Link href={props.url}>{props.children}</Link>
      ) : (
        <>{props.children}</>
      )}
      <span>&gt;</span>
    </li>
  );
};

export const Default = (props: BreadcrumbProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const id = props.params.RenderingIdentifier;
  const data = props.fields?.data;

  const items = data.contextItem.ancestors.map((ancestor) => {
    let title = '';
    if (ancestor.navigationTitle.value !== '') {
      title = ancestor.navigationTitle.value;
    } else if (ancestor.title.value !== '') {
      title = ancestor.title.value;
    } else if (ancestor.displayName !== '') {
      title = ancestor.displayName;
    } else {
      title = ancestor.name;
    }

    return (
      <BreadcrumbItem
        id={ancestor.id}
        pageState={sitecoreContext.pageState}
        url={ancestor.url.path}
      >
        <>{title}</>
      </BreadcrumbItem>
    );
  });

  items.reverse();

  let contextTitle = '';
  if (data.contextItem.navigationTitle.value !== '') {
    contextTitle = data.contextItem.navigationTitle.value;
  } else if (data.contextItem.title.value !== '') {
    contextTitle = data.contextItem.title.value;
  } else if (data.contextItem.displayName !== '') {
    contextTitle = data.contextItem.displayName;
  } else {
    contextTitle = data.contextItem.name;
  }
  items.push(
    <li key={data.contextItem.id} className="item">
      {contextTitle}
    </li>
  );

  if (data) {
    return (
      <div className={`component breadcrumb ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <ul>{items}</ul>
        </div>
      </div>
    );
  }

  return <BreadcrumbDefaultComponent {...props} />;
};
