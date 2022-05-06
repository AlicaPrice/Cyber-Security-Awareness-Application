import React, { useRef, useEffect, useContext } from "react";
import { CSSTransition as Selection } from "react-transition-group";


/* Creating a context for parent */
const Current = React.createContext({
  parent: {},
});


/* Determining whether this is the first render. */
function firstRender() {
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
}

/* Setting up transitions */
function CSSTransition({
  show,
  appear,
  unmountOnExit,
  select = "",
  selecting = "",
  selected = "",
  selectedFin = "",
  leaving = "",
  leavingFin = "",
  children,
  tag = "div",
  ...rest
}) {
  const startSelect = select.split(" ").filter((s) => s.length);
  const startSelecting = selecting.split(" ").filter((s) => s.length);
  const startSelected = selected.split(" ").filter((s) => s.length);
  const unselect = selectedFin.split(" ").filter((s) => s.length);
  const unselecting = leaving.split(" ").filter((s) => s.length);
  const unselected = leavingFin.split(" ").filter((s) => s.length);
  const removeFromDom = unmountOnExit;


  /* Add and remove class functions */
  function addClass(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClass(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  /* Using useRef to persist values between renders
  and provide reference to transitions component */
  const nodeRef = React.useRef(null);
  const Component = tag;


  /* Sets up when transitions are to be fired */
  return (
    <Selection
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done) => {
        nodeRef.current.addEventListener("transitionend", done, false);
      }}
      onEnter={() => {
        if (!removeFromDom) nodeRef.current.style.display = null;
        addClass(nodeRef.current, [...startSelect, ...startSelecting]);
      }}
      onEntering={() => {
        removeClass(nodeRef.current, startSelecting);
        addClass(nodeRef.current, startSelected);
      }}
      onEntered={() => {
        removeClass(nodeRef.current, [...startSelected, ...startSelect]);
      }}
      onExit={() => {
        addClass(nodeRef.current, [...unselect, ...unselected]);
      }}
      onExiting={() => {
        removeClass(nodeRef.current, unselecting);
        addClass(nodeRef.current, unselected);
      }}
      onExited={() => {
        removeClass(nodeRef.current, [...unselected, ...unselect]);
        if (!removeFromDom) nodeRef.current.style.display = "none";
      }}
    >
      <Component
        ref={nodeRef}
        {...rest}
        style={{ display: !removeFromDom ? "none" : null }}
      >
        {children}
      </Component>
    </Selection>
  );
}

function Fade({ show, appear, ...rest }) {
  const { parent } = useContext(Current);
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition appear={parent.appear} show={parent.show} {...rest} />
    );
  }

  return (
    <Current.Provider
      value={{
        parent: {
          show,
          firstRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </Current.Provider>
  );
}

export default Fade;