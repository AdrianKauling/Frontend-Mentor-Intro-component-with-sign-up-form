function MainDiv() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MyArticle, null), /*#__PURE__*/React.createElement(MyAside, null));
}

function MyArticle() {
  return /*#__PURE__*/React.createElement("article", {
    className: "MyArticle flex-item"
  }, /*#__PURE__*/React.createElement("h1", null, "Learn to code by watching others"), /*#__PURE__*/React.createElement("p", null, "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invatuable."));
}

function MyAside() {
  return /*#__PURE__*/React.createElement("aside", {
    className: "flex-item"
  }, /*#__PURE__*/React.createElement("section", {
    id: "tryFreeText"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Try it free 7 days"), " then $20/mo. thereafter")), /*#__PURE__*/React.createElement(MyForm, null));
}

function MyForm() {
  return /*#__PURE__*/React.createElement("form", {
    id: "myForm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inp-form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    autoComplete: "off",
    placeholder: "First Name",
    required: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "spanError"
  })), /*#__PURE__*/React.createElement("div", {
    className: "inp-form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    autoComplete: "off",
    placeholder: "Last Name",
    required: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "spanError"
  })), /*#__PURE__*/React.createElement("div", {
    className: "inp-form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    autoComplete: "off",
    placeholder: "Email Address",
    required: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "spanError"
  })), /*#__PURE__*/React.createElement("div", {
    className: "inp-form"
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    id: "password",
    autoComplete: "off",
    placeholder: "Password",
    required: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "spanError"
  })), /*#__PURE__*/React.createElement("button", {
    className: "inp-form",
    type: "submit"
  }, "CLAIM YOUR FREE TRIAL"), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("p", null, "By clicking the button, you are agreeing to our ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms and Services"))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MainDiv, null), document.querySelector('#app'));
