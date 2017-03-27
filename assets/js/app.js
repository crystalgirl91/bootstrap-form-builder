define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
       , "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/buttons.json", "text!data/custom.json"
       , "text!templates/app/render.html",  "text!templates/app/about.html",
], function(
  $, _, Backbone
  , SnippetsCollection, MyFormSnippetsCollection
  , TabView, MyFormView
  , inputJSON, radioJSON, selectJSON, buttonsJSON,customJSON
  , renderTab, aboutTab,customTab
){
  return {
    initialize: function(){

      //Bootstrap tabs from json.
      new TabView({
        title: "Input",
        name:"输入框"
        , collection: new SnippetsCollection(JSON.parse(inputJSON))
      });
      new TabView({
        title: "Radios / Checkboxes",
        name:"单选框"
        , collection: new SnippetsCollection(JSON.parse(radioJSON))
      });
      new TabView({
        title: "Select",
        name:"下拉列表"
        , collection: new SnippetsCollection(JSON.parse(selectJSON))
      });
      new TabView({
        title: "Buttons",
        name:"按钮"
        , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
      });
      new TabView({
        title: "Custom",
        name:"自定义"
        , collection: new SnippetsCollection(JSON.parse(customJSON))
      });
      new TabView({
        title: "Rendered",
        name:"渲染"
        , content: renderTab
      });
      new TabView({
        title: "About",
        name:"关于"
        , content: aboutTab
      });

      //Make the first tab active!
      $("#components .tab-pane").first().addClass("active");
      $("#formtabs li").first().addClass("active");
      // Bootstrap "My Form" with 'Form Name' snippet.
      new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection([
          { "title" : "Form Name"
            , "fields": {
              "name" : {
                "label"   : "Form Name"
                , "type"  : "input"
                , "value" : "Form Name"
              }
            }
          }
        ])
      });
    }
  }
});
