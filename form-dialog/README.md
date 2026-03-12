# Form Dialog System
---

This is a component system for form dialogs. It's a reusable system that you can copy paste whenever you need to work with modal dialogs that display a form to submit in your web pages.

It's basically a contract between:
* The _system_ - basically a JavaScript file that expects a specific DOM structure, and the consumer JS code to fire certain events.
* The _consumer_ - the code that consumes this system. 

In the HTML+CSS that we have here we show the usage for this system. The CSS is basic and should be customized per application.
There's a bit of CSS that is part of the system here, we'll see below.

The contract is basically:
* a HTML structure
* a set of `CustomEvent`s.
* "states" - the `<dialog>` element can be in one of the states: `submitting`, `error`. This is done by using the `data-state` attribute.
The consumer can respond to this in its CSS code.


### DOM structure
```
<button data-open-modal data-modal-id="<ID OF MODAL DIALOG>">OPEN DIALOG1</button> // opens the modal

<dialog id="<ID>" class="js-form-dialog">
    <button class="js-close-dialog-button"> // closes the modal, can be several of those
    <div class="error-banner"></div> // will be used to display form-level errors

    // one or many of:
    <div class="field">
        <input name="<INPUT_NAME>">
        <p class="field-validation-error"></p> // will be used to display field-level errors
    </div>
</dialog>
```

### JavaScript
The _consumer_ also needs to have JS code that:
upon submitting the form, uses the appropriate `<dialog>` element to dispatch the following custom events:
* `submitting` - to put the dialog in the submitting state.
* `submitsuccess` - this will close the dialog and clear it completely.
* `submiterror` - with a `type` and corresponding details, see in the `index.html`

### CSS
The `form.js` system also does some manipulation on the DOM that you may want to respond in CSS:
* The `data-state` on the `<dialog>` is changing, and you may want to respond to for example `data-state=submitting` to show like a spinner or disable buttons
* The `.error-banner` element's `show` class is toggled, so you may want to define this.
