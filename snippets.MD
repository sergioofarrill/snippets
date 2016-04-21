If template is product, do THIS.
--------------------------------
`
{% if template == "product" %}
	Do this
{% endif %}
`
Show the top 10 best sellers.
--------------------------------

`{% assign best = collections["best-sellers"] %}
<ul>
{% for product in best limit:10 %}
  <li><a href="{{ product.url }}">{{ product.title }}</a></li>
{% endfor %}
</ul>`

Output list of collections product is featured in on the product page.
----------------------------------------------------------------------
`
<ul>
{% for collection in product.collections %}
    <li><a href="{{ collection.url }}">{{ collection.title }}</a></li>
{% endfor %}
</ul>
`
Add a link list in the footer.
--------------------------------
`
{% if linklists.footer.links.size > 0 %}
      <p role="navigation">
      {% for link in linklists.footer.links %}
        <a href="{{ link.url }}" title="{{ link.title }}"{% if link.active %} class="active"{% endif %}>{{ link.title }}</a>
      {% endfor %}
      </p>
{% endif %}
`
Add h1 in the index template. Good for SEO. Only needs to be on the home page.
------------------------------------------------------------------------------
`
{% if template == 'index' %}
	<h1 class="hidden">{{ shop.name }}</h1>
{% endif %}
`
Add current year
----------------
`
{{ "now" | date: "%Y" }}
`

List all vendors in an unordered list.
--------------------------------------
`
<ul>
  {% for product_vendor in shop.vendors %}
  <li>{{ product_vendor | link_to_vendor }}</li>
  {% endfor %}
</ul>
`
Get the vendor path (change to type to get the type path)
----------------------------------------------------------
`
{% capture vendor_url %}{{ collection.current_vendor | url_for_vendor }}{% endcapture %}
`

Add a link list with handle
----------------------------
`
<ul>
{% for link in linklists.shop-by-brand-column-1.links %}
   <li {% if link.active %} class="active" {% endif %} >{{ link.title | link_to: link.url }}</li>
{% endfor %}
</ul>
`