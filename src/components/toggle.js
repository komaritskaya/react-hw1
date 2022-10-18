import { nanoid } from 'nanoid';
import { Component } from "react";
import { genres } from "../mock/movies";

class Toggle extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.activeGenre !== nextProps.activeGenre && nextProps.activeGenre !== 'crime') {
          return true;
        }
        return false;
    }

    render() {
        return (
            <div className="ui secondary menu">
                <button
                    key={nanoid()}
                    className={`item${!this.props.activeGenre && ' active'}`}
                    onClick={() => this.props.handleToggle('')}
                >
                    all
                </button>
                {
                    genres.map(genre => (
                        <button
                            key={nanoid()}
                            className={`item${this.props.activeGenre === genre && ' active'}`}
                            onClick={() => this.props.handleToggle(genre)}
                        >
                            {`${genre}${genre === 'crime' ? ' (WON\'T CHANGE COLOR WHEN ACTIVE)' : ''}`}
                        </button>
                    ))
                }
            </div>
        );
    }
}

export default Toggle;