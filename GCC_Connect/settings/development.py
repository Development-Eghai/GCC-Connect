from .base import *

DEBUG = True

ALLOWED_HOSTS = ["*"]

# Development database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': environ.Env()("DB_NAME", default="dev_db"),
        'USER': environ.Env()("DB_USER", default="dev_user"),
        'PASSWORD': environ.Env()("DB_PASSWORD", default="dev_password"),
        'HOST': environ.Env()("DB_HOST", default="127.0.0.1"),
        'PORT': environ.Env()("DB_PORT", default="3306"),
    }
}
