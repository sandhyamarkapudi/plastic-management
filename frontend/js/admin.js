const adminApi = (path, options = {}) => api(path, options);

function adminLogout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', async () => {
  if (!document.querySelector('[data-admin-page]')) return;

  try {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'admin') {
      throw new Error('Admin login required');
    }

    // Try fetching stats
    try {
      const { data } = await adminApi('/admin/dashboard');
      document.querySelectorAll('[data-stat]').forEach(el => {
        el.textContent = data[el.dataset.stat] ?? 0;
      });
    } catch (e) {
      // Mock stats if backend offline
      const mockStats = { users: 142, content: 6, questions: 10, feedback: 28 };
      document.querySelectorAll('[data-stat]').forEach(el => {
        el.textContent = mockStats[el.dataset.stat] ?? 0;
      });
    }

    const path = location.pathname;

    // Users Page Table
    if (path.endsWith('users.html')) {
      const tbody = document.querySelector('#adminTable');
      try {
        const r = await adminApi('/admin/users');
        if (r && r.data && r.data.length) {
          tbody.innerHTML = r.data.map(u => `
            <tr>
              <td class="py-3 px-4">
                <div class="d-flex align-items-center gap-2">
                  <div class="badge-soft badge-soft-emerald p-2 rounded-circle" style="width:34px;height:34px;display:flex;align-items:center;justify-content:center;">
                    <i class="fa-solid fa-user"></i>
                  </div>
                  <strong>${u.name}</strong>
                </div>
              </td>
              <td class="py-3 px-4 text-muted"><i class="fa-solid fa-phone me-1 fs-xs"></i> ${u.mobile}</td>
              <td class="py-3 px-4">${u.village}</td>
              <td class="py-3 px-4">${u.district}</td>
              <td class="py-3 px-4"><span class="badge-soft badge-soft-blue">${u.role || 'Learner'}</span></td>
            </tr>
          `).join('');
        } else {
          throw new Error('No remote users');
        }
      } catch (err) {
        tbody.innerHTML = `
          <tr>
            <td class="py-3 px-4"><strong>Ramesh Kumar</strong></td>
            <td class="py-3 px-4 text-muted">9876543210</td>
            <td class="py-3 px-4">Konduru</td>
            <td class="py-3 px-4">Krishna</td>
            <td class="py-3 px-4"><span class="badge-soft badge-soft-blue">Learner</span></td>
          </tr>
          <tr>
            <td class="py-3 px-4"><strong>Anasuya Devi</strong></td>
            <td class="py-3 px-4 text-muted">9848012345</td>
            <td class="py-3 px-4">Ghanpur</td>
            <td class="py-3 px-4">Medak</td>
            <td class="py-3 px-4"><span class="badge-soft badge-soft-blue">Learner</span></td>
          </tr>
          <tr>
            <td class="py-3 px-4"><strong>Admin User</strong></td>
            <td class="py-3 px-4 text-muted">9999999999</td>
            <td class="py-3 px-4">District HQ</td>
            <td class="py-3 px-4">Central</td>
            <td class="py-3 px-4"><span class="badge-soft badge-soft-emerald">Admin</span></td>
          </tr>
        `;
      }
    }

    // Feedback Page Table
    if (path.endsWith('feedback.html')) {
      const tbody = document.querySelector('#adminTable');
      const localFeedbacks = JSON.parse(localStorage.getItem('saved_feedbacks') || '[]');

      try {
        const r = await adminApi('/admin/feedback');
        const allFeedbacks = [...(r.data || []), ...localFeedbacks];
        if (allFeedbacks.length) {
          tbody.innerHTML = allFeedbacks.map(f => {
            const stars = parseInt(f.rating, 10) || 5;
            return `
              <tr>
                <td class="py-3 px-4 fw-semibold">${f.user_name}</td>
                <td class="py-3 px-4">${f.village}, ${f.district || ''}</td>
                <td class="py-3 px-4">
                  <span class="text-warning fw-bold">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</span>
                  <span class="small text-muted ms-1">(${stars}/5)</span>
                </td>
                <td class="py-3 px-4 text-muted small">${f.message}</td>
              </tr>
            `;
          }).join('');
        } else {
          throw new Error('No feedback');
        }
      } catch (err) {
        if (localFeedbacks.length) {
          tbody.innerHTML = localFeedbacks.map(f => {
            const stars = parseInt(f.rating, 10) || 5;
            return `
              <tr>
                <td class="py-3 px-4 fw-semibold">${f.user_name}</td>
                <td class="py-3 px-4">${f.village}, ${f.district || ''}</td>
                <td class="py-3 px-4">
                  <span class="text-warning fw-bold">${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</span>
                  <span class="small text-muted ms-1">(${stars}/5)</span>
                </td>
                <td class="py-3 px-4 text-muted small">${f.message}</td>
              </tr>
            `;
          }).join('');
        } else {
          tbody.innerHTML = `
            <tr>
              <td class="py-3 px-4 fw-semibold">Suresh Reddy</td>
              <td class="py-3 px-4">Konduru, Krishna</td>
              <td class="py-3 px-4"><span class="text-warning">★★★★★</span> (5/5)</td>
              <td class="py-3 px-4 text-muted small">Our farmers group completely stopped burning plastic bags near our canal.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 fw-semibold">Anasuya Devi</td>
              <td class="py-3 px-4">Ghanpur, Medak</td>
              <td class="py-3 px-4"><span class="text-warning">★★★★★</span> (5/5)</td>
              <td class="py-3 px-4 text-muted small">We reuse clean curd tubs for keeping seed varieties safe from moisture.</td>
            </tr>
          `;
        }
      }
    }
  } catch (err) {
    document.querySelector('[data-admin-page]').innerHTML = `
      <div class="container py-5">
        <div class="card p-5 text-center shadow-sm border-0 mx-auto" style="max-width: 500px; border-radius: var(--radius-xl);">
          <div class="brand-emblem mx-auto mb-3" style="background:#fee2e2; color:#ef4444;">
            <i class="fa-solid fa-lock"></i>
          </div>
          <h2 class="h4 mb-2">Admin Authentication Required</h2>
          <p class="small text-muted mb-4">${err.message || 'Please log in with administrator credentials.'}</p>
          <a href="login.html" class="btn btn-primary">
            <i class="fa-solid fa-right-to-bracket me-1"></i> Go to Admin Login
          </a>
        </div>
      </div>
    `;
  }
});
