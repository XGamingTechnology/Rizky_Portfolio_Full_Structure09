FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/

# ✅ Path yang benar: assets/ (bukan src/assets/)
COPY assets/ /usr/share/nginx/html/assets/

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Hapus default nginx page
RUN rm -f /usr/share/nginx/html/index.nginx-debian.html

# Run sebagai non-root user
USER nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]