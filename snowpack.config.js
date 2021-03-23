module.exports = {
  buildOptions: {
    clean: true,
  },
  mount: {
    src: "/_dist_",
    public: "/",
  },
  optimize: {
    bundle: true,
  },
};
