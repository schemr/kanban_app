import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    render() {
        if (this.state.editing) {
            return this.renderEdit();
        }
        return this.renderNote();
    }

    renderEdit = () => {
        return <input type="text" ref={
            element => element ?
            element.selectionStart = this.props.task.length : null
        } autofocus={true} defaultValue={this.props.task} onBlur={this.finishEdit} onkeypress={this.checkEnter}/>
    };
    renderNote = () => {
        const onDelete = this.props.onDelete;
        return (
            <div onClick={this.edit}>
                <span className="task">{this.props.task}</span>
                {onDelete ? this.renderDelete() : null }
            </div>
        )
    };
    edit = () => {
        this.setState({
            editing: true
        });
    };
    renderDelete = () => {
        return <button className="delete-note" onClick={this.props.onDelete}>x</button>;
    };
    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    };
    finishEdit = (e) => {
        const value = e.target.value;

        if(this.props.onEdit){
            this.props.onEdit(value);
            this.setState({
                editing:false
            });
        }
    };
}