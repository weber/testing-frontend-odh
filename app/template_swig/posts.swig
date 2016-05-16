{% extends 'layout/layout.swig' %}

{% block js %}
<script src="/bundle/postsApp/index.polyf.min.js"></script>
<script src="/bundle/postsApp/index.min.js"></script>
{% endblock %}

{% block content %}
 <div class="b-posts_cnt js-posts"></div>
{% endblock %}

{% block header %}
<div class="b-post_form__add ">
    <div class="b-post_form__item">
        <input type="text" name="post_title" class="js-post_title" placeholder="Заголовок" />
    </div>
    <div class="b-post_form__item">
        <textarea name="post_content" class="js-post_content" placeholder="Статья"></textarea>
    </div>
    <div class="b-post_form__item">
        <button class="b-post_form__btn js-form-add_post">Добавить статью</button>
    </div>
</div>
{% endblock %}