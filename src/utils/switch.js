const switchClass = (el, to, from) => {
    el.classList.remove(from);
    el.classList.add(to);
};

export default switchClass;