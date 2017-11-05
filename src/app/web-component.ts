class CustomElement extends HTMLElement {
    _username: any;
    get username() {
        return this._username;
    }

    set username(value) {
        if (this._username !== value) {
            this._username = value;

            this.render();
        }
    }

    constructor() {
        super();

        this.addEventListener('click', (e: any) => {
            const eventObj = new CustomEvent('selected', {
                detail: this.username
            });

            if (e.target.tagName === 'BUTTON') {
                this.dispatchEvent(eventObj);
            }
        });
    }

    render() {
        this.innerHTML = this.renderString();
    }

    renderString() {
        return `
        <div style="border: solid 1px #000;">
          The Custom Element
          <h2>
            Hello My Name is ${this.username} <button>Select</button>
          </h2>
        </div>
      `;
    }
}
