import {
  NextImage as JssImage,
  ImageField,
  Link as JssLink,
  LinkField,
  RichTextField,
  RichText,
  TextField,
  Text,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface PickUpItemFields {
  Title: TextField;
  Thumbnail: ImageField;
  Overview: RichTextField;
}

type PickUpItemProps = {
  id: string;
  url: string;
  fields: PickUpItemFields;
};

interface Fields {
  PickUpHeader: RichTextField;
  PickUpItem: PickUpItemProps[];
  ListLink: LinkField;
}

type PickUpProps = {
  params: { [key: string]: string };
  fields: Fields;
};

type ComponentContentProps = {
  pageState: string | undefined;
  url: string;
  children: JSX.Element;
};

const PickUpItem = (props: ComponentContentProps): JSX.Element => {
  return (
    <li className="item">
      {props.pageState !== 'edit' ? (
        <Link href={props.url}>{props.children}</Link>
      ) : (
        <>{props.children}</>
      )}
    </li>
  );
};

export const Default = (props: PickUpProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component pick-up ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <div className="pick-up-header">
          <RichText field={props.fields.PickUpHeader} />
        </div>
        <ul>
          {props.fields.PickUpItem.map((item) => {
            return (
              <PickUpItem key={item.id} pageState={sitecoreContext.pageState} url={item.url}>
                <>
                  <div className="item-content-first">
                    <JssImage field={item.fields.Thumbnail} />
                  </div>
                  <div className="item-content-second">
                    <div className="item-title">
                      <Text field={item.fields.Title} />
                    </div>
                    <div className="item-overview">
                      <RichText field={item.fields.Overview} />
                    </div>
                  </div>
                </>
              </PickUpItem>
            );
          })}
        </ul>
        <div className="field-pick-uplink">
          <JssLink field={props.fields.ListLink} />
        </div>
      </div>
    </div>
  );
};
