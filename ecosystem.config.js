module.exports = {
  apps : [{
    script: 'gunicorn --chdir /home/user/PROJECTS/pluspl.us/ wsgi:application',
    watch: true
  }]
};
