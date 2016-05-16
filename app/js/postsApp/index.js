'use strict';
import $ from 'jquery';
import tmpl from 'tmpl';
import loaders from 'loaders';
import _ from 'underscore';
import bb from 'backbone';
import tmp_post from './templates/post.html!text';

let postsCollection =  bb.Collection.extend();
let PostsCollection = new postsCollection();

let Post = bb.View.extend({
    el:'body',
    events:{
        'click .js-form-add_post': 'addPost',
        'keyup .js-post_title, .js-post_content': 'changeForm'
    },
    posts:  $('.js-posts'),
    initialize: function () {
        this.Posts = PostsCollection;
        let self = this;
        this.Posts.on('add', function () {
            self.render();
        });
    },
    changeForm: function (e) {
        let el_content = $('.js-post_content');
        let el_title = $('.js-post_title');
        let el_button = $('.js-form-add_post');

        let data = {
            title: el_title.val(),
            content: el_content.val()
        };
        if (data.title && data.content) {
            el_button.show();
        } else {
            el_button.hide();
        }
    },
    addPost: function (e) {
        let el_content = $('.js-post_content');
        let el_title = $('.js-post_title');

        let data = {
            title: el_title.val(),
            content: el_content.val()
        };

        if (data.title && data.content) {
            this.Posts.add([data]);
            el_content.val('');
            el_title.val('');
        }
    },
    makeImage: function (text) {
        let pattern = /\s((https|http)\:\/\/)([a-zA-Z0-9\_\/\.\-]*\.jpg?|.png?|.gif?|.webp)\s/gim;
        function replaserImage(match) {
            return ` <img src="${match}" class="post_image"> `;
        }

        let changed_text = text.replace(pattern, replaserImage);
        return changed_text;
    },
    makeLink: function (text) {
        let pattern = /\s((https|http)\:\/\/)([a-zA-Z0-9\_\/\.]*)(\.com?|.ru?|.net?|.html)([\/]){0,}([\s])/gim;
        function replaserLink(match) {
            return ` <a href="${match}" class="post_link">${match}</a> `;
        }

        let changed_text = text.replace(pattern, replaserLink);
        return changed_text;
    },
    render: function () {
        let result = tmpl(tmp_post, _.last(this.Posts.toJSON()));
        result = this.makeImage(result);
        result = this.makeLink(result);
        $('.js-posts').append(result);
    }
});
new Post();

export default {};
