import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SideBarComponent} from './side-bar.component';
import {By} from '@angular/platform-browser';
import {provideRouter, RouterLink} from '@angular/router';
import {Component} from '@angular/core';
import {RouterTestingHarness} from '@angular/router/testing';

@Component({
  template: ``
})
export class DummyComponent {
}

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarComponent],
      providers: [provideRouter([
        {path: '', component: DummyComponent},
        {path: 'edit', component: DummyComponent}
      ])]
    })
      .compileComponents()

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can link to main pages', () => {
    const routerLinkElements = fixture.debugElement.queryAll(By.directive(RouterLink));
    const routerLinks = routerLinkElements.map(element => element.injector.get(RouterLink));

    expect(routerLinks.length).withContext('should have 2 links').toBe(2);
    expect(routerLinks[0]?.urlTree?.toString()).withContext('1st link should go to Home').toBe('/');
    expect(routerLinks[1]?.urlTree?.toString()).withContext('2nd link should go to Edit').toBe('/edit');
  });

  it('can show the active link', async () => {
    let routerTestingHarness: RouterTestingHarness
    await fixture.ngZone?.run(async () => routerTestingHarness = await RouterTestingHarness.create('/'))
    let activeLinks = fixture.debugElement.queryAll(By.css('.active')).map((element) => element.injector.get(RouterLink))

    expect(activeLinks.length).withContext('should only have 1 active link').toBe(1);
    expect(activeLinks[0]?.urlTree?.toString()).withContext('active link should be for Home').toBe('/');

    await fixture.ngZone?.run(async () => routerTestingHarness.navigateByUrl('/edit'))
    activeLinks = fixture.debugElement.queryAll(By.css('.active')).map(element => element.injector.get(RouterLink));
    expect(activeLinks.length).withContext('should only have 1 active link after navigating').toBe(1);
    expect(activeLinks[0]?.urlTree?.toString()).withContext('active link should be for Edit').toBe('/edit');
  });
});
