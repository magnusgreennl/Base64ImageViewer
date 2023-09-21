import { Component, createElement} from "react";

import "./ui/EncodedStringImageViewer.css";

export default class EncodedStringImageViewer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { EncodedString } = this.props;
        return (
            <div class="iv-container">
                <img
                    class="iv-img"
                    style={{ width: this.props.imgwidth, height: this.props.imgheight }}
                    src={`data:image;base64,${EncodedString.value}`}
                    alt={this.props.alttext}
                />
            </div>
        );
    }
}
