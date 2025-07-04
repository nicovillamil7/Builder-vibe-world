
const https = require('https');
const fs = require('fs');

async function checkLiveVsLocal() {
  console.log('🔍 Checking live site vs local changes...\n');
  
  // Check if sitemap is accessible
  console.log('1. Checking current sitemap...');
  try {
    const response = await fetch('https://genesisstoneusa.com/sitemap.xml');
    if (response.ok) {
      console.log('✅ Sitemap is accessible');
    } else {
      console.log('❌ Sitemap not accessible');
    }
  } catch (error) {
    console.log('❌ Error accessing sitemap:', error.message);
  }
  
  // Check robots.txt
  console.log('\n2. Checking robots.txt...');
  try {
    const response = await fetch('https://genesisstoneusa.com/robots.txt');
    if (response.ok) {
      const robotsContent = await response.text();
      console.log('✅ Robots.txt accessible');
      if (robotsContent.includes('Sitemap:')) {
        console.log('✅ Sitemap declared in robots.txt');
      }
    }
  } catch (error) {
    console.log('❌ Error accessing robots.txt:', error.message);
  }
  
  // Check key pages
  const keyPages = [
    '/',
    '/products',
    '/retail',
    '/wholesale',
    '/about',
    '/contact'
  ];
  
  console.log('\n3. Checking key pages status...');
  for (const page of keyPages) {
    try {
      const response = await fetch(`https://genesisstoneusa.com${page}`);
      console.log(`${response.ok ? '✅' : '❌'} ${page} - Status: ${response.status}`);
    } catch (error) {
      console.log(`❌ ${page} - Error: ${error.message}`);
    }
  }
  
  console.log('\n📋 Recommendations:');
  console.log('• Check Google Search Console for current indexed pages');
  console.log('• Use "site:genesisstoneusa.com" in Google to see indexed content');
  console.log('• Deploy to Replit staging first before production');
  console.log('• Monitor crawl errors after deployment');
}

checkLiveVsLocal().catch(console.error);
