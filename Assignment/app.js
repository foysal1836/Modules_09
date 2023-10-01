app.use((req, res, next) => {
    res.status(404).json({ status: 'error', message: 'Route not found' });
  });
  