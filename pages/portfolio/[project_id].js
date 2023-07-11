function PortfoliotDetailPage(props) {
  console.log(props);
  //return <Productcontent products={props.selectedProject}/>;
  return <div>Selected project: {props.selectedProject}</div>;
}

export async function getStaticProps(context) {
  const project_id = context.params.project_id;

  return {
    props: {
      selectedProject: project_id,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default PortfoliotDetailPage;
