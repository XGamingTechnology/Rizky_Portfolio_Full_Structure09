FROM nginx:alpine

# Copy index.html
COPY index.html /usr/share/nginx/html/

# ✅ Copy folder src/ (pastikan destination diakhiri /)
COPY src/ /usr/share/nginx/html/src/

# ✅ Copy folder assets/ (jika ada di root)
COPY assets/ /usr/share/nginx/html/assets/

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Hapus default nginx page
RUN rm -f /usr/share/nginx/html/index.nginx-debian.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]