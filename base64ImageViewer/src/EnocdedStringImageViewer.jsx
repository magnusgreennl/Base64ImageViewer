import { Component, createElement } from "react";


export default class EnocdedStringImageViewer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { EnocdedString } = this.props;
        return (
            <div>
                <img
                    style={{ width: `${this.props.imgwidth}%`, height: `${this.props.imgheight}%` }}
                    src={`data:image;base64,${EnocdedString.value}`}
                />

            </div>
        );
    }
}
