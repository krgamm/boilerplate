Matrix partials allow you to bring external code in to your SiteWrench Matrix templates. This is most useful because it allows you to keep your Matrix code under version control with GIT. This also allows you to reuse code across multiple matrices on a site.

There are two key requirements for your file names.

1. Your file name must end with .liquid
2. Your file name must begin with an underscore (ex: _filename.liquid)

To include your partial file in a Matrix, use the following syntax:

{% include 'yourFileName' %}

NOTE: your reference to your partial file does NOT include the .liquid extension and does NOT include the underscore.
