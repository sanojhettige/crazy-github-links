const getHiddenProps = props =>
  props.reduce((all, prop) => {
    all[prop] = { table: { disable: true } };
    return all;
  }, {});


export {
  getHiddenProps,
};
