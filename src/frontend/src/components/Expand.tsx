import { RichTextField, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { useState } from 'react';

type ExpandItemProps = {
  id: string;
  expandText1: { jsonValue: RichTextField };
  expandText2: { jsonValue: RichTextField };
};

interface Fields {
  data: {
    datasource: {
      children: {
        results: ExpandItemProps[];
      };
      expandHeader: { jsonValue: RichTextField };
    };
  };
}

type ExpandProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ExpandItem = (props: ExpandItemProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li className="item">
      <div className="item-first">
        <div className="item-first-content">
          <RichText field={props.expandText1.jsonValue} />
        </div>
        <div
          className={`expand-button${isExpanded ? ' expanded' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
      <div className={`item-second${isExpanded ? ' expanded' : ''}`}>
        <RichText field={props.expandText2.jsonValue} />
      </div>
    </li>
  );
};

const ExpandDefaultComponent = (props: ExpandProps): JSX.Element => (
  <div className={`component expand ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Expand</span>
    </div>
  </div>
);

export const Default = (props: ExpandProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const datasource = props.fields?.data?.datasource;

  if (datasource) {
    return (
      <div className={`component expand ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="expand-header">
            <RichText field={datasource.expandHeader.jsonValue} />
          </div>
          <ul>
            {datasource.children.results.map((item) => {
              return <ExpandItem key={item.id} {...item} />;
            })}
          </ul>
        </div>
      </div>
    );
  }

  return <ExpandDefaultComponent {...props} />;
};
