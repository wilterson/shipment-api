module.exports = {
  dialect: 'postgres',
  host: process.env.PGHOST,
  username: 'postgres',
  password: 'docker',
  database: 'shipment_api',
  define: {
    timestamps: true,
    underscored: true,
  },
};
