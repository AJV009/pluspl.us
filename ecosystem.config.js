module.exports = {
  apps : [{
    script: 'gunicorn --chdir /home/ubuntu/plusplusbot/ wsgi:application',
    watch: true
  }]
};
