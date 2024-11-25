from .base import *

DEBUG = False

ALLOWED_HOSTS = ["yourdomain.com"]

# Production database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': environ.Env()("DB_NAME"),
        'USER': environ.Env()("DB_USER"),
        'PASSWORD': environ.Env()("DB_PASSWORD"),
        'HOST': environ.Env()("DB_HOST"),
        'PORT': environ.Env()("DB_PORT", default="3306"),
    }
}

# Security settings
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
X_FRAME_OPTIONS = "DENY"
