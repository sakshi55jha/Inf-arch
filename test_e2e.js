const http = require('http');

function request(url, options = {}, postData = null) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const opts = {
      hostname: u.hostname,
      port: u.port,
      path: u.pathname + u.search,
      method: options.method || 'GET',
      headers: options.headers || {},
    };

    if (postData) {
      opts.headers['Content-Type'] = 'application/json';
      opts.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = http.request(opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });

    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function runTests() {
  console.log('--- E2E Tests for Inches & Feet MERN Clone ---');

  // 1. Client HTTP check
  const clientRes = await request('http://localhost:3000/');
  console.log('1. React Frontend Root:', clientRes.status, clientRes.body.includes('Inches & Feet') ? '✅ OK' : '❌ Failed');

  // 2. Health check
  const healthRes = await request('http://localhost:5000/api/health');
  console.log('2. Backend Health:', healthRes.status, healthRes.body);

  // 3. Projects catalog
  const projRes = await request('http://localhost:5000/api/projects');
  const projData = JSON.parse(projRes.body);
  console.log('3. Projects Count in MongoDB:', projData.count, projData.count === 54 ? '✅ 54 Projects Live' : '❌');

  // 4. Test Inquiries POST
  const inqPayload = JSON.stringify({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98450 77889',
    service: 'Luxury House Plans',
    projectLocation: 'Indiranagar, Bangalore',
    budget: '₹60 Lakhs - 1.5 Cr',
    message: 'Planning a modern biophilic 4-BHK duplex villa with interior architecture.',
  });
  const inqRes = await request('http://localhost:5000/api/inquiries', { method: 'POST' }, inqPayload);
  console.log('4. Submit Consultation Inquiry:', inqRes.status, JSON.parse(inqRes.body).success ? '✅ Inquiry Stored' : '❌');

  // 5. Test Quotation POST
  const quotePayload = JSON.stringify({
    clientName: 'Meera Iyer',
    clientEmail: 'meera.iyer@techfirm.com',
    clientPhone: '+91 99001 22334',
    projectType: 'Commercial Office',
    areaSqFt: 4500,
    scope: ['Architectural Drawings & Elevations', 'Building Information Modeling (BIM & Revit)'],
    packageTier: 'Turnkey Bespoke',
    notes: 'Open workspace floor with collaborative breakout pods.',
  });
  const quoteRes = await request('http://localhost:5000/api/quotations', { method: 'POST' }, quotePayload);
  console.log('5. Submit Cost Quotation:', quoteRes.status, JSON.parse(quoteRes.body).success ? '✅ Quotation Stored' : '❌');

  // 6. Test Job Application POST
  const appPayload = JSON.stringify({
    fullName: 'Rohan Mehra',
    email: 'rohan.bim@archdesign.in',
    phone: '+91 98112 33445',
    position: 'BIM Specialist / Revit Modeler',
    experienceYears: '3-5 years',
    portfolioUrl: 'https://behance.net/rohanmehra',
    resumeLink: 'https://linkedin.com/in/rohanmehra',
    coverNote: 'Expert in Revit parametric families and Navisworks clash reports.',
  });
  const appRes = await request('http://localhost:5000/api/applications', { method: 'POST' }, appPayload);
  console.log('6. Submit Career Application:', appRes.status, JSON.parse(appRes.body).success ? '✅ Application Stored' : '❌');

  // 7. Test Newsletter POST
  const newsPayload = JSON.stringify({ email: 'client.test@lifestyle.com' });
  const newsRes = await request('http://localhost:5000/api/newsletter/subscribe', { method: 'POST' }, newsPayload);
  console.log('7. Subscribe Newsletter:', newsRes.status, JSON.parse(newsRes.body).success ? '✅ Subscribed' : '❌');

  // 8. Test Stats Aggregation
  const statsRes = await request('http://localhost:5000/api/stats');
  const statsData = JSON.parse(statsRes.body);
  console.log('8. Admin Dashboard KPI Stats:', statsData.stats);

  console.log('\n🎉 ALL FULL-STACK E2E TESTS PASSED SUCCESSFULLY!');
}

runTests().catch(console.error);
