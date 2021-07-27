module.exports = {
  dialect: 'postgres',
  host: process.env.PGHOST || '127.0.0.1',
  username: process.env.PGUSERNAME || 'postgres',
  password: process.env.PGPASSWORD || 'docker',
  database: process.env.PGDATABASE || 'shipment_api',
  define: {
    timestamps: true,
    underscored: true,
  },
};
