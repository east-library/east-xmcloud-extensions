import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  data: {
    contextItem: {
      language: { name: string };
      languages: {
        language: { name: string; nativeName: string };
      }[];
      url: {
        path: string;
      };
    };
  };
}

type LanguageSwitchProps = {
  params: { [key: string]: string };
  fields: Fields;
};

type ComponentContentProps = {
  pageState: string | undefined;
  url: string;
  name: string;
  nativeName: string;
};

const LanguageSwitchItem = (props: ComponentContentProps): JSX.Element => {
  switch (props.pageState) {
    case 'normal':
      return (
        <Link href={props.url} locale={props.name}>
          {props.nativeName}
        </Link>
      );
    case 'preview':
      return (
        <Link href={`${props.url}?sc_lang=${props.name}`} locale={false}>
          {props.nativeName}
        </Link>
      );
    default:
      return <>{props.nativeName}</>;
  }
};

export const Default = (props: LanguageSwitchProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const id = props.params.RenderingIdentifier;
  const contextItem = props.fields.data.contextItem;

  const languages = contextItem.languages.map((item) => {
    return {
      name: item.language.name,
      nativeName: item.language.nativeName.replace(/\(.*?\)/g, '').trim(),
    };
  });

  const otherLanguages: ComponentContentProps[] = languages
    .filter((l) => l.name !== contextItem.language.name)
    .map((item) => {
      return {
        pageState: sitecoreContext.pageState,
        url: contextItem.url.path,
        name: item.name,
        nativeName: item.nativeName,
      };
    });

  return (
    <div className={`component language-switch ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        {otherLanguages.length > 0 ? (
          <ul>
            {otherLanguages.map((item) => {
              return (
                <li key={item.name} className="item">
                  <LanguageSwitchItem {...item} />
                </li>
              );
            })}
          </ul>
        ) : sitecoreContext.pageState === 'edit' ? (
          <span className="is-empty-hint">No other language</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
