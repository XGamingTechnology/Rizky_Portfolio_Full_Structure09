FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Hapus default nginx page
RUN rm -f /usr/share/nginx/html/index.nginx-debian.html

# ✅ FIX: Buat cache directories dengan permission yang benar SEBELUM switch user
RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /usr/share/nginx/html

# ✅ HAPUS baris "user nginx;" dari nginx.conf atau pastikan tidak ada
# Karena kita sudah switch user di bawah, directive "user" di nginx.conf akan konflik

# Run sebagai non-root user (security best practice)
USER nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]