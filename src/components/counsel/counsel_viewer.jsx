import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import counsellogo from '../counsel/infos-logo.png';
import '../counsel/counsel_styles.css'
import { useEffect } from "react";


const CounselViewer = () => {

    useEffect(() => {
        window.addEventListener('DOMContentLoaded', () => {

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id');
                    if (entry.intersectionRatio > 0) {
                        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
                    } else {
                        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
                    }
                });
            });
        
            // Track all sections that have an `id` applied
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.observe(section);
            });
            
        });
      });

    return(
    <>
    <MDBRow>
        <MDBCol size={12}>
        <main>
            <div>
                <section className="side-section" id="introduction">
                    <h2 className="section-title">Introduction</h2>
                    <p className="section-title">…</p>
                </section>
                <section className="side-section" id="profile-permissions">
                    <h2 className="section-title">User Permissions</h2>
                    <p className="section-title">…</p>
                </section>
                <section className="side-section" id="dashboard">
                    <h2 className="section-title">Dashboard</h2>
                    <p className="section-title">…</p>
                </section>
                <section className="side-section" id="company-profiles">
                    <h2 className="section-title">Company Profiles</h2>
                    <p className="section-title">…</p>
                </section>
                <section className="side-section" id="query-models">
                    <h2 className="section-title">Query Models</h2>
                    <section className="side-section" id="query-models--focus1">
                        <h3 className="section-title">QM Focus 1</h3>
                        <p className="section-title">…</p>
                    </section>
                    <section className="side-section" id="query-models--focus2">
                        <h3 className="section-title">QM Focus 2</h3>
                        <p className="section-title">…</p>
                    </section>
                    <section className="side-section" id="query-models--focus3">
                        <h3 className="section-title">QM Focus 3</h3>
                        <p className="section-title">…</p>
                    </section>
                    <section className="side-section" id="query-models--focus4">
                        <h3 className="section-title">QM Focus 4</h3>
                        <p className="section-title">…</p>
                    </section>
                    <section className="side-section" id="query-models--focus5">
                        <h3 className="section-title">QM Focus 5</h3>
                        <p className="section-title">…</p>
                    </section>
                    <section className="side-section" id="query-models--focus6">
                        <h3 className="section-title">QM Focus 6</h3>
                        <p className="section-title">…</p>
                    </section>
                    <section className="side-section" id="query-models--focus7">
                        <h3 className="section-title">QM Focus 7</h3>
                        <p className="section-title">…</p>
                    </section>
                    <section className="side-section" id="query-models--focus8">
                        <h3 className="section-title">QM Focus 8</h3>
                        <p className="section-title">…</p>
                    </section>
                </section>
                <section className="side-section" id="plan-forms">
                    <h2 className="section-title">Plan Forms</h2>
                    <p className="section-title">…</p>
                </section>
                <section className="side-section" id="insight-models">
                    <h2 className="section-title">Insight Models</h2>
                    <p className="section-title">…</p>
                </section>
                <section className="side-section" id="terminal">
                    <h2 className="section-title">Terminal</h2>
                    <p className="section-title">…</p>
                </section>
            </div>
            <nav className="section-nav">
                <ol>
                    <li className="side-list"><a href="#introduction">Introduction</a></li>
                    <li className="side-list"><a href="#profile-permissions">User Permissions</a></li>
                    <li className="side-list"><a href="#dashboard">Dashboard</a></li>
                    <li className="side-list"><a href="#company-profiles">Company Profiles</a></li>
                    <li className="side-list"><a href="#query-models">Query Models</a>
                        <ol>
                            <li className="side-list"><a href="#query-models--focus1">QM Focus 1</a></li>
                            <li className="side-list"><a href="#query-models--focus2">QM Focus 2</a></li>
                            <li className="side-list"><a href="#query-models--focus3">QM Focus 3</a></li>
                            <li className="side-list"><a href="#query-models--focus4">QM Focus 4</a></li>
                            <li className="side-list"><a href="#query-models--focus5">QM Focus 5</a></li>
                            <li className="side-list"><a href="#query-models--focus6">QM Focus 6</a></li>
                            <li className="side-list"><a href="#query-models--focus7">QM Focus 7</a></li>
                            <li className="side-list"><a href="#query-models--focus8">QM Focus 8</a></li>
                        </ol>
                    </li>
                    <li className="side-list"><a href="#plan-forms">Plan Forms</a></li>
                    <li className="side-list"><a href="#insight-models">Insight Models</a></li>
                    <li className="side-list"><a href="#terminal">Terminal</a></li>

                </ol>
            </nav>
        </main>
        </MDBCol>
    </MDBRow>
    <MDBRow>
        
    </MDBRow>
    </>
    )


}
export default CounselViewer;