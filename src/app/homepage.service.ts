import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HomepageService {
  constructor(protected http: HttpClient) {}

  getHomepage() {
    return this.http.get(
      "http://admin.trydatatherapy.com/wp-json/wp/v2/pages?slug=homepage"
    );
  }

  getValues() {
    return this.http.get(
      "http://admin.trydatatherapy.com/en/wp-json/wp/v2/valores?_embed"
    );
  }

  getKnows() {
    return this.http.get(
      "http://admin.trydatatherapy.com/en/wp-json/wp/v2/know?_embed"
    );
  }

  getMembers() {
    return this.http.get(
      "http://admin.trydatatherapy.com/en/wp-json/wp/v2/miembros?_embed"
    );
  }

  getServices() {
    return this.http.get(
      "http://admin.trydatatherapy.com/en/wp-json/wp/v2/service?_embed"
    );
  }

  getPublishings() {
    return this.http.get(
      "http://admin.trydatatherapy.com/wp-json/wp/v2/publicaciones?per_page=100"
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

  getServicePage() {
    return this.http.get(
      "http://admin.trydatatherapy.com/wp-json/wp/v2/pages?slug=servicios"
    );
  }
}
