import AuthorCard from '~/components/AuthorCard';

export default (speakers) =>
  Object.keys(speakers).map(key => {
    const { image, name, company, description, abouts, links } = speakers[key];
    return (<AuthorCard
      key={key}
      image={`/static/images/speaker/${image}`}
      name={name}
      company={company}
      description={description}
      github={links.github}
      twitter={links.twitter}
      facebook={links.facebook}
      about={abouts}/>);
  });