/**
 * Created by ofer on 12/11/17.
 */
import React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

     renderTitleField(field) {
    return (
        <div className="form-group">
            <label>Title</label>
            <input
                className="form-control"
                type="text"
                {...field.input}
            />
        </div>
    );
     }

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    render(){
        return (
   <form>
       <Field
           label="Title"
           name="title"
              component={this.renderField}
       />
       <Field
           label="Tags"
           name="tags"
              component={this.renderField}
       />
       <Field
           label="Post Content"
           name="content"
           component={this.renderField}
       />
   </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);