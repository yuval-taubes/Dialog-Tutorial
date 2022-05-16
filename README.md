## What are Modal's

A modal is a dialog box/popup window that is displayed on top of the current page. In this example
We will learn how to make a Modal Using the HTML ```dialog``` tag

### The ```dialog``` tag

browsers have introduced the new ```dialog``` tag that makes it easier to create dialogs and lightboxes.
With Javascript you can call methods to open the dialog or close it, or know when the dialog was 
closed through an event.

### The Code.

The first thing we have to do is the HTML, it's as simple as this 

```html

<button id="button">Open Modal</button>

<dialog id="modal-dialog">
    <div class="container">
        <div class="center">
            <div class="modal">
    <h2>The Modal is open</h2>
    <button id="button2">Close Modal</button>
            </div>
        </div>
    </div>
</dialog>

```

Next is the styling for our modal. We want to make sure to center it, and include a button to close it. Using dialog::backdrop allows us to change
the opacity of everything behind the dialog

```css

dialog{
    width: 500px;
    height: 500px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;
}

dialog::backdrop {
	background: rgba(0,0,0,0.5);
}

.center{
    display: flex;
    width: 100%;
    height: 500px;
    justify-content: center;
    align-items: center;
}

.modal{
    display: flex;
    align-items: space;
    justify-content: center;
    flex-direction: column;
    height: 200px;
}

button{
    font-size: 25px;
    color: #fff;
    font-weight: 400;
    text-decoration: none;
    letter-spacing: 0.2px;
    text-transform: none;
    cursor: pointer;
    background-color:#ff007f;
    padding: 7px 12px;
    border-radius: 25px;
}

#button{
    margin-top: calc(100vh - 50%);

}


```

The final piece is the javascript, where we want to make the modal pop up with a button press and close with a button press.

```javascript

let button = document.getElementById("button");
let button2 = document.getElementById('button2')

	button.addEventListener("click", function () {
		document.querySelector("#modal-dialog").showModal();
	});
    
	button2.addEventListener("click", function () {
		document.querySelector("#modal-dialog").close();
	});
    

```

we can use the ```Dialog.showModal()``` and ```Dialog.close()``` to open and close the modal using a button press

### References

- [Useful Angle](https://usefulangle.com/post/110/html-dialog-element-to-create-modal-lightbox)
- [W3 schools](https://www.w3schools.com/w3css/w3css_modal.asp#:~:text=A%20modal%20is%20a%20dialog,%C3%97)

