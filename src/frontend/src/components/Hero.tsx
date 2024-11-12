import {
  NextImage as JssImage,
  ImageField,
  Link as JssLink,
  LinkField,
  RichTextField,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  HeroImage: ImageField;
  HeroText: RichTextField;
  HeroLink: LinkField;
}

type HeroProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const HeroDefaultComponent = (props: HeroProps): JSX.Element => (
  <div className={`component hero ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Hero</span>
    </div>
  </div>
);

export const Default = (props: HeroProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (props.fields) {
    const textPosition = {
      top: `${props.params.TextVerticalPosition}%`,
      left: `${props.params.TextHorizontalPosition}%`,
    };

    const linkPosition = {
      top: `${props.params.LinkVerticalPosition}%`,
      left: `${props.params.LinkHorizontalPosition}%`,
    };

    return (
      <div className={`component hero ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-heroimage">
            <JssImage field={props.fields.HeroImage} />
          </div>
          <div className="field-herotext" style={textPosition}>
            <RichText field={props.fields.HeroText} />
          </div>
          <div className="field-herolink" style={linkPosition}>
            <JssLink field={props.fields.HeroLink} />
          </div>
        </div>
      </div>
    );
  }

  return <HeroDefaultComponent {...props} />;
};
