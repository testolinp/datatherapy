import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HomepageService {
  constructor(protected http: HttpClient) { }

  getHomepage(lang) {
    let currentLang = lang == "en" ? "homepage" : "inicio";
    return this.http.get(
      `http://admin.trydatatherapy.com/wp-json/wp/v2/pages?slug=${currentLang}`
    );
  }

  getValues(lang) {
    let currentLang = lang == "en" ? "/en" : "";
    return this.http.get(
      `http://admin.trydatatherapy.com${currentLang}/wp-json/wp/v2/valores?_embed`
    );
  }

  getKnows(lang) {
    let currentLang = lang == "en" ? "/en" : "";
    return this.http.get(
      `http://admin.trydatatherapy.com${currentLang}/wp-json/wp/v2/know?_embed`
    );
  }

  getMembers(lang) {
    let currentLang = lang == "en" ? "/en" : "";
    return this.http.get(
      `http://admin.trydatatherapy.com${currentLang}/wp-json/wp/v2/miembros?_embed`
    );
  }

  getServices(lang) {
    let currentLang = lang == "en" ? "/en" : "";
    return this.http.get(
      `http://admin.trydatatherapy.com${currentLang}/wp-json/wp/v2/service?_embed`
    );
  }

  getPublishings(lang) {
    let currentLang = lang == "en" ? "/en" : "";
    return this.http.get(
      `http://admin.trydatatherapy.com${currentLang}/wp-json/wp/v2/publicaciones?per_page=100`
    );
  }

  getServiceEvidence() {
    return this.http.get(
      "http://admin.trydatatherapy.com/wp-json/wp/v2/evidencia?per_page=100"
    );
  }

  getServiceRedaction() {
    return this.http.get(
      "http://admin.trydatatherapy.com/wp-json/wp/v2/redaccion?per_page=100"
    );
  }

  getServiceRevision() {
    return this.http.get(
      "http://admin.trydatatherapy.com/wp-json/wp/v2/revisiones?per_page=100"
    );
  }

  getServicePage(lang) {
    let currentLang = lang == "en" ? "/en" : "";
    return this.http.get(
      `http://admin.trydatatherapy.com${currentLang}/wp-json/wp/v2/pages?slug=servicios`
    );
  }
}
