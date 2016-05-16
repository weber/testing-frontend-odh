<!doctype html>
<html>
<head>
    <title></title>
    <meta charset="utf8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0,  user-scalable=no">
    <meta name="theme-color" content="#263238"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="mobile-web-app-capable" content="yes">
    <script src="/assets/js-inline/mediaquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="bundle/main.dev.min.css"/>
</head>
<body>

<section class="b-wrapper">
    <header>
        <section class="b-cntr__with_width">
            <div class="b-cnt">
                {% block header %}{% endblock %}
            </div>
        </section>
    </header>
    <section class="b-cntr__with_width">
        <section class="b-cntr">
            {# include '../parials/col-l.swig' #}
            <section class="b-cnt ">
                {% block content %}{% endblock %}
            </section>
        </section>
    </section>
</section>
{% block js %}{% endblock %}
</body>
</html>
